/* Příklad 

 * 1) pomocí cyklu zjistěte nejnižší a nejvyšší číslo v poli

 * 2) výstupy uložte do proměnných min a max

 * 3 bonus) porovnejte vaše výsledky s výstupy funkcí Math.max/min(...numbers)

 * 4 bonus) přepište vaše řešení s použitím jiného cyklu

 *

 * Testovací scénáře:

 * [10, 4.5, 78, -25, 46, -10, 0, -22.22] -> min: -25; max: 78

 * [1000, 1000, 1000] -> min: 1000; max: 1000

 * [-1000, -111.11] -> min: -1000; max: -111.11

 * [] -> min: undefined; max: undefined

 */

const array = [10, 4.5, 78, -25, 46, -10, 0, -22.22];
// let min = Math.min(...pole);
// let max = Math.max(...pole);

// console.log(min);
// console.log(max);

const forLoopMinMax = () => {
    let min = array[0], max = array[0]
  
    for (let i = 1; i < array.length; i++) {
      let value = array[i]
      min = (value < min) ? value : min
      max = (value > max) ? value : max
    }
    console.log(min);
    console.log(max);
  
    return [min, max]
}
const [forLoopMin, forLoopMax] = forLoopMinMax()
console.log(`Minimum: ${forLoopMin}, Maximum: ${forLoopMax}`) // Minimum: -37, Maximum: 37

//2.
const minUsingReduce = () => array.reduce((min, currentValue) => Math.min(min, currentValue), array[0])
const maxUsingReduce = () => array.reduce((max, currentValue) => Math.max(max, currentValue), array[0])
console.log(`Minimum: ${minUsingReduce()}, Maximum: ${maxUsingReduce()}`)