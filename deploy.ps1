# Quick Deploy Script for Gaurav Choyal Portfolio
param(
    [string]$GitHubToken = "
)

Write-Host ========================================= -ForegroundColor Cyan
Write-Host   Gaurav Choyal Portfolio Deploy Script   -ForegroundColor Cyan
Write-Host ========================================= -ForegroundColor Cyan

if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
 Write-Host Git is not installed or not in PATH. -ForegroundColor Yellow
 Write-Host Installing Git via Winget... -ForegroundColor Green
 winget install --id Git.Git -e --source winget
 $env:Path = [System.Environment]::GetEnvironmentVariable(Path,Machine) + ; + [System.Environment]::GetEnvironmentVariable(Path,User)
}

if (-not $GitHubToken) {
 $GitHubToken = Read-Host Please paste your GitHub Personal Access Token (or press Enter if SSH is configured)
}

git init
git add .
git commit -m Update Gaurav Choyal Web Design Portfolio
git branch -M main

if ($GitHubToken) {
 git remote remove origin -ErrorAction SilentlyContinue
 git remote add origin https://@github.com/gchoyal/portfolio-site.git
} else {
 git remote remove origin -ErrorAction SilentlyContinue
 git remote add origin https://github.com/gchoyal/portfolio-site.git
}

git push -u origin main --force
Write-Host 
Write-Host ✓ Successfully pushed to https://github.com/gchoyal/portfolio-site -ForegroundColor Green
Write-Host ✓ Live site will be available at: https://gchoyal.github.io/portfolio-site/ -ForegroundColor Cyan