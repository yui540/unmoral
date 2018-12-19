import { url } from './link'

const shareText = 'ショートムービー「unmoral」公式サイト / @yui540'

export const twitter = `https://twitter.com/intent/tweet?text=${shareText}&url=${url}`

export const facebook = `http://www.facebook.com/share.php?u=${url}`

export const line = `https://social-plugins.line.me/lineit/share?url=${url}`
