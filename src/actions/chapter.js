import { CHANGE_CHAPTER } from '../constants/chapter'

export const changeChapter = chapter => ({
  type: CHANGE_CHAPTER,
  payload: { chapter: chapter },
})
