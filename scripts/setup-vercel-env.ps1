# scripts/setup-vercel-env.ps1
# Helper script to sync SMTP variables from your local .env to your Vercel project

$ErrorActionPreference = "Stop"

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host " Brahmani Information — Vercel Environment Variables Sync" -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor Cyan

$envFilePath = Join-Path $PSScriptRoot "..\.env"

if (-not (Test-Path $envFilePath)) {
    Write-Error "No .env file found at $envFilePath. Please ensure .env exists with SMTP configuration."
    exit 1
}

Write-Host "`n1. Reading variables from local .env..." -ForegroundColor Yellow

$varsToSync = @(
    "SMTP_HOST",
    "SMTP_PORT",
    "SMTP_SECURE",
    "SMTP_USER",
    "SMTP_PASS",
    "SMTP_FROM",
    "EMAIL_TO",
    "EMAIL_CC"
)

$envMap = @{}

Get-Content $envFilePath | ForEach-Object {
    $line = $_.Trim()
    if ($line -and -not $line.StartsWith("#")) {
        $parts = $line -split "=", 2
        if ($parts.Length -eq 2) {
            $key = $parts[0].Trim()
            $val = $parts[1].Trim().Trim('"').Trim("'")
            if ($varsToSync -contains $key) {
                $envMap[$key] = $val
            }
        }
    }
}

foreach ($key in $varsToSync) {
    if ($envMap.ContainsKey($key)) {
        Write-Host "  - Found: $key" -ForegroundColor Green
    } else {
        Write-Warning "  - Missing from .env: $key"
    }
}

Write-Host "`n2. Checking Vercel CLI Authentication..." -ForegroundColor Yellow
$authCheck = & npx vercel whoami 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "You are not logged into Vercel CLI. Logging in now..." -ForegroundColor Cyan
    & npx vercel login
}

Write-Host "`n3. Uploading environment variables to Vercel (Production, Preview, Development)..." -ForegroundColor Yellow

foreach ($key in $varsToSync) {
    if ($envMap.ContainsKey($key)) {
        $val = $envMap[$key]
        Write-Host "Setting $key in Vercel..." -ForegroundColor Cyan
        
        # Remove existing if already present to avoid duplicate errors
        & npx vercel env rm $key production -y 2>$null
        & npx vercel env rm $key preview -y 2>$null
        & npx vercel env rm $key development -y 2>$null
        
        # Add to production, preview, development
        "$val" | & npx vercel env add $key production
        "$val" | & npx vercel env add $key preview
        "$val" | & npx vercel env add $key development
    }
}

Write-Host "`n==========================================================" -ForegroundColor Green
Write-Host " All environment variables configured in Vercel successfully!" -ForegroundColor Green
Write-Host " Please trigger a redeploy on Vercel to activate the changes." -ForegroundColor Green
Write-Host " Test endpoint: https://brahmaniinformation.com/api/health" -ForegroundColor Green
Write-Host "==========================================================" -ForegroundColor Green
