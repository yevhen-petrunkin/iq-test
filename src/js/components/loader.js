export const loader = () => {
  const loaderBox = document.createElement('div')
  loaderBox.classList.add('loader')
  const ballArr = []
  for (let i = 0; i <= 10; i += 1) {
    const ball = document.createElement('div')
    ball.classList.add('loader__ball')
    ballArr.push(ball)
  }

  loaderBox.append(...ballArr)
  return loaderBox
}
