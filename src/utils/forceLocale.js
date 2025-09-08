import Cookies from 'universal-cookie'

export function forceLocaleVi() {
  console.log('TEST SETTING')
  const cookies = new Cookies()
  cookies.set(
    'openedx-language-preference', // Tên cookie phải trùng với LANGUAGE_PREFERENCE_COOKIE_NAME
    'vi', // Giá trị = ngôn ngữ bạn muốn
    {
      path: '/',
      //   domain: '.edx.veronlabs.com', // nhớ để domain đúng để MFE đọc được
      sameSite: 'lax'
    }
  )
}
