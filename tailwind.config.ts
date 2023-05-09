import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
    theme: {
    extend: {
              backgroundImage: {
        'hero-pattern': "url('/assets/img/fotohero.jpg)",
      }
    }
  }
}
