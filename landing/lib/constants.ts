/**
 * FocusDuo 상수 및 설정
 */

// 가격 정보
export const PRICING = {
  FREE: {
    price: 0,
    taskLimit: 3,
    features: [
      'Up to 3 tasks',
      'Focus on top 2 tasks',
      'Drag & drop ordering',
      'Always on top'
    ]
  },
  PREMIUM: {
    price: 4.99,
    taskLimit: 50,
    features: [
      'Up to 50 tasks',
      'Edit tasks anytime',
      'Import/Export data',
      'Minimal mode UI',
      'Advanced settings',
      'Time tracking display',
      'All future updates'
    ]
  }
} as const;

// Lemon Squeezy 설정
// TODO: Lemon Squeezy 제품 생성 후 실제 값으로 교체
export const LEMON_SQUEEZY = {
  // Lemon Squeezy 스토어 ID
  storeId: '231768',

  // 제품 ID
  productId: '668671',

  // 변형 ID (Lifetime License)
  variantId: '1050663',

  // 체크아웃 URL
  // 예: 'https://store.lemonsqueezy.com/checkout/buy/abc123-def456'
  checkoutUrl: 'https://ashsoft.lemonsqueezy.com/buy/c6086606-d2b4-429f-b0ec-7338fd278062',
} as const;

// 다운로드 링크
export const DOWNLOAD_LINKS = {
  mac: 'https://github.com/ashsofter/focus-duo/releases/download/v1.0.0/FocusDuo-1.0.0-universal.dmg',
  windows: '#', // TODO: Windows 다운로드 링크 (추후 추가)
  github: 'https://github.com/ashsofter/focus-duo',
  latestRelease: 'https://github.com/ashsofter/focus-duo/releases/latest',
} as const;

// 소셜 미디어
export const SOCIAL_LINKS = {
  twitter: '#',
  github: 'https://github.com/ashsofter/focus-duo',
  email: 'support@focusduo.com',
} as const;

// 앱 정보
export const APP_INFO = {
  name: 'FocusDuo',
  tagline: 'Focus on what matters. Your top 2 tasks, always visible.',
  description: 'FocusDuo helps you stay focused on your top priorities by keeping your most important tasks front and center.',
  version: '1.0.0',
} as const;
