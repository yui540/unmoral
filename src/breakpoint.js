export const pcLayout = styles => {
  return `
    @media screen and (min-width: 761px) {
      ${styles}
    }
  `
}

export const spLayout = styles => {
  return `
    @media screen and (max-width: 760px) {
      ${styles}
    }
  `
}
