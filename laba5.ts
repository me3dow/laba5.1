document.addEventListener("DOMContentLoaded" ,() => {
    const data: number[] = [12, 23, 34, 45];

    async function removeOddsWithDelay(arr: number[]) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 !== 0) {
                console.log(`Удаляю: ${arr[i]}`);
                arr.splice(i, 1);
                i--; // Коррекция индекса после удаления
                await new Promise(resolve => setTimeout(resolve, 1000)); // Ожидание 1 секунды
            }
        }
        console.log("Результат:", arr);
    }
    
    removeOddsWithDelay(data);
    
    function extFunction(x: string)
    {
        console.log("Вызвалась внешняя функция");
        return (y: string) => console.log("Вызвалась внутренняя функция");
    }
    let func = extFunction("Hello!!!!");
    func("World!!!!");
})