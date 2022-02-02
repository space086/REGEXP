const str = `
010-1234-5678
thesecon@gmail.com
http://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

// g : 모든 문자를 검색하는 옵션
// i : 대소문자 가리지 않고 검색해주는 옵션 (gi)
//const regexp = new RegExp('the', 'gi')
 
// const regexp = /the/gi
// console.log(regexp.test(str))
// 원본 데이터 수정 x
// console.log(str.replace(regexp, 'AAA'))

// 원본 데이터에 변경된 값을 넣고 싶으면?
//str 변수를 먼저 let으로 변경 (값 재할당 가능)
// str = str.replace(regexp, 'AAA')
// console.log(str)

// \ = 이스케이프 문자 : 백슬래시 기호를 통해 본래의 기능에서 벗어나 상태가 바뀌는 문자

// console.log(
//   str.match(/\b\w{2,3}\b/g)
//   )

//f로 시작하는 문자
// console.log(
//   str.match(/\bf\w{1,}\b/g)
// )

// 공백 대체하기
// const h = `  the hello  world   !

// `
// console.log(
//   h.replace(/\s/g, '')
// )

console.log(
  str.match(/(?<=@).{1,}/g)
  )
