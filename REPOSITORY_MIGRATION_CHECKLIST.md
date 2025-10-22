# 🔄 Repository Migration Checklist

## Migration: `macaos/focus-duo` → `ashsofter/focus-duo`

---

## ✅ 자동 완료된 작업 (코드 수정)

### 1. Git Remote URL 변경
- **파일**: `.git/config`
- **변경**: `https://github.com/macaos/focus-duo.git` → `https://github.com/ashsofter/focus-duo.git`
- **상태**: ✅ 완료
- **확인**:
  ```bash
  git remote -v
  # origin  https://github.com/ashsofter/focus-duo.git (fetch)
  # origin  https://github.com/ashsofter/focus-duo.git (push)
  ```

---

### 2. Electron Package 설정
- **파일**: `electron/package.json`
- **변경사항**:
  - `homepage`: `https://github.com/ashsofter/focus-duo`
  - `repository.url`: `https://github.com/ashsofter/focus-duo.git`
  - `publish.owner`: `ashsofter`
- **상태**: ✅ 완료
- **영향**:
  - 자동 업데이트가 새 저장소에서 확인
  - `npm run publish` 시 새 저장소에 Release 생성

---

### 3. Landing 페이지 다운로드 링크
- **파일**: `landing/lib/constants.ts`
- **변경사항**:
  - `DOWNLOAD_LINKS.mac`: `https://github.com/ashsofter/focus-duo/releases/download/...`
  - `DOWNLOAD_LINKS.github`: `https://github.com/ashsofter/focus-duo`
  - `DOWNLOAD_LINKS.latestRelease`: `https://github.com/ashsofter/focus-duo/releases/latest`
  - `SOCIAL_LINKS.github`: `https://github.com/ashsofter/focus-duo`
- **상태**: ✅ 완료
- **영향**:
  - Landing 페이지 다운로드 버튼이 새 저장소 링크 사용
  - GitHub 링크가 올바른 저장소로 연결

---

### 4. Release Notes
- **파일**: `electron/RELEASE_NOTES_v1.0.0.md`
- **변경사항**: 모든 GitHub URL 일괄 변경
- **상태**: ✅ 완료
- **영향**: Release 생성 시 올바른 링크 포함

---

## 📝 외부에서 해야 할 작업 (GitHub 웹 설정)

### 1. GitHub 저장소 생성 또는 이전 ⚠️ 필수

#### Option A: 새 저장소 생성
1. **https://github.com/new** 접속
2. 설정:
   - **Owner**: `ashsofter`
   - **Repository name**: `focus-duo`
   - **Visibility**: ✅ **Public** (필수!)
   - **Initialize**: 체크 해제 (로컬에 이미 코드 있음)
3. **Create repository** 클릭

#### Option B: 기존 저장소 Transfer
1. **https://github.com/macaos/focus-duo/settings** 접속
2. **Danger Zone** → "Transfer ownership"
3. New owner: `ashsofter`
4. Confirm transfer

**⚠️ 중요:** Transfer 시 기존 Release, Issues, Wiki 모두 이동됨

---

### 2. 로컬 코드 푸시 ⚠️ 필수

```bash
cd /Users/jay/Documents/github-macaos/focus-duo

# 변경사항 커밋
git add .
git commit -m "Update repository URLs: macaos → ashsofter"

# 푸시 (새 저장소로)
git push -u origin main

# 기존 태그가 있다면 함께 푸시
git push --tags
```

**예상 결과:**
- 소스 코드가 `ashsofter/focus-duo`에 업로드됨
- Remote tracking이 새 저장소로 설정됨

---

### 3. GitHub Release 재생성 (필요 시) ⚠️ 선택

만약 기존 Release를 이전하지 않았다면:

```bash
# 1. 빌드 (필요시)
cd electron
npm run build:mac

# 2. 태그 생성 (아직 없다면)
git tag v1.0.0
git push origin v1.0.0

# 3. GitHub Release 생성
# https://github.com/ashsofter/focus-duo/releases/new
# - Tag: v1.0.0
# - Title: FocusDuo v1.0.0 - Focus on What Matters
# - Upload:
#   - FocusDuo-1.0.0-universal.dmg
#   - FocusDuo-1.0.0-universal-mac.zip
#   - latest-mac.yml
```

---

### 4. Landing 페이지 재배포 ⚠️ 필수

#### Vercel 재연결

1. **Vercel Dashboard** 접속
   - https://vercel.com/dashboard

2. **프로젝트 설정**
   - Settings → Git → Connect to Git Repository
   - 또는 새 프로젝트로 Import

3. **저장소 선택**
   - GitHub → `ashsofter/focus-duo`
   - Root Directory: `landing`

4. **환경변수 확인** (기존과 동일)
   - (환경변수가 있다면 재설정)

5. **배포**
   - Deploy 버튼 클릭
   - 또는 자동 배포 대기

**배포 후 확인:**
- https://www.focus-duo.com/ 접속
- "Download" 버튼 클릭 시 새 저장소에서 다운로드되는지 확인

---

### 5. 자동 업데이트 테스트 ⚠️ 권장

기존 사용자가 있다면:

1. **기존 앱 실행**
   - 앱 실행 → 5초 후 업데이트 체크

2. **콘솔 로그 확인**
   ```
   [Auto-Update] Checking for updates...
   [Auto-Update] Checking: https://github.com/ashsofter/focus-duo/releases/latest
   ```

3. **예상 동작**
   - ✅ 새 저장소에서 업데이트 확인
   - ✅ `latest-mac.yml` 정상 읽기
   - ✅ 업데이트 알림 정상 작동

---

## 🔍 자주 묻는 질문

### Q1: 기존 사용자의 앱은 어떻게 되나요?
**A:** 기존 앱은 그대로 작동합니다. 단, 자동 업데이트가 새 저장소(`ashsofter/focus-duo`)를 바라보게 됩니다.

### Q2: 기존 GitHub Stars/Watchers는 어떻게 되나요?
**A:**
- **Transfer 사용 시**: 모두 유지됨
- **새 저장소 생성 시**: 0부터 시작

### Q3: 기존 Release는 어떻게 되나요?
**A:**
- **Transfer 사용 시**: 모든 Release 이동됨
- **새 저장소 생성 시**: 수동으로 재생성 필요

### Q4: 기존 `macaos/focus-duo`는 어떻게 하나요?
**A:**
- **Transfer 후**: 자동으로 리다이렉트됨
- **새 저장소 생성 후**: Archive 또는 삭제 권장

---

## 📊 영향도 분석

### ✅ 자동으로 업데이트되는 부분
- Electron 앱의 자동 업데이트 체크
- Landing 페이지 다운로드 링크
- GitHub 참조 링크들
- Release 생성 대상

### ⚠️ 수동으로 확인해야 할 부분
- GitHub 저장소 생성/이전
- Vercel 재연결 및 재배포
- DNS 설정 (변경사항 없음)
- LemonSqueezy 링크 (변경사항 없음)

### ❌ 영향 받지 않는 부분
- LemonSqueezy 라이선스 시스템
- 앱 기능 자체
- 사용자 데이터
- 라이선스 활성화

---

## 🎯 완료 체크리스트

### 코드 변경 (자동 완료됨)
- [x] Git remote URL 변경
- [x] electron/package.json 업데이트
- [x] landing/lib/constants.ts 업데이트
- [x] RELEASE_NOTES 업데이트

### 외부 작업 (수동 필요)
- [ ] GitHub 저장소 생성 또는 Transfer
- [ ] 코드 푸시 (`git push origin main`)
- [ ] 태그 푸시 (`git push --tags`)
- [ ] GitHub Release 생성 (필요시)
- [ ] Vercel 재연결 및 재배포
- [ ] Landing 페이지 다운로드 링크 테스트
- [ ] 자동 업데이트 기능 테스트

### 검증
- [ ] `git remote -v` 확인
- [ ] `https://github.com/ashsofter/focus-duo` 접속 확인
- [ ] `https://www.focus-duo.com/` 다운로드 버튼 확인
- [ ] Release 다운로드 링크 확인:
  ```
  https://github.com/ashsofter/focus-duo/releases/download/v1.0.0/FocusDuo-1.0.0-universal.dmg
  ```

---

## 🚀 빠른 실행 가이드

```bash
# 1. 변경사항 커밋 및 푸시
cd /Users/jay/Documents/github-macaos/focus-duo
git add .
git commit -m "Update repository URLs: macaos → ashsofter"
git push -u origin main
git push --tags

# 2. GitHub 저장소 확인
# https://github.com/ashsofter/focus-duo

# 3. Landing 페이지 재배포
# Vercel Dashboard → Settings → Git → Reconnect

# 4. 테스트
# - Landing 페이지 다운로드 버튼
# - Release 다운로드 링크
# - 자동 업데이트 체크
```

---

## 📞 문제 해결

### 푸시 시 "Permission denied" 에러
```bash
# SSH 키 확인 또는 Personal Access Token 사용
git remote set-url origin https://github.com/ashsofter/focus-duo.git
```

### Vercel 재연결 안 됨
- Vercel GitHub 앱 권한 확인
- `ashsofter` 계정에 Vercel 설치 필요

### 다운로드 링크 404
- 저장소가 Public인지 확인
- Release가 Published 상태인지 확인
- 파일명이 정확한지 확인

---

**마이그레이션 완료 후 이 문서를 보관하세요!**
