var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
document.addEventListener("DOMContentLoaded", () => {
    const data = [12, 23, 34, 45];
    function removeOddsWithDelay(arr) {
        return __awaiter(this, void 0, void 0, function* () {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] % 2 !== 0) {
                    console.log(`Удаляю: ${arr[i]}`);
                    arr.splice(i, 1);
                    i--; // Коррекция индекса после удаления
                    yield new Promise(resolve => setTimeout(resolve, 1000)); // Ожидание 1 секунды
                }
            }
            console.log("Результат:", arr);
        });
    }
    removeOddsWithDelay(data);
    function extFunction(x) {
        console.log("Вызвалась внешняя функция");
        return (y) => console.log("Вызвалась внутренняя функция");
    }
    let func = extFunction("Hello!!!!");
    func("World!!!!");
});
