

function App_new(){
    function isPrimeNum(num){

        for (let i = 2; i <= Math.sqrt(num);i++){
            if(num%i ===0){
                return false;
            }
        }

        return true;
    }

    const testNumber = 19;
    const result = isPrimeNum(testNumber);
    console.log(result);

}

export default App_new
