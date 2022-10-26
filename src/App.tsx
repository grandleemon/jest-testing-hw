import {FC, useState} from "react";
import {math} from "./utils";

type ICalc = {
    display: string
    operation?: string
}

const items: ICalc[] = [
    {
        display: '/',
        operation: '/'
    },
    {
        display: '**(x)',
        operation: '**'
    },
    {
        display: 'sqrt(x)',
        operation: 'sqrt'
    },
    {
        display: 'clear',
        operation: 'clear'
    },
    {
        display: '7'
    },
    {
        display: '8'
    },
    {
        display: '9'
    },
    {
        display: 'x',
        operation: 'x'
    },
    {
        display: '4'
    },
    {
        display: '5'
    },
    {
        display: '6'
    },
    {
        display: '-',
        operation: '-'
    },
    {
        display: '1'
    },
    {
        display: '2'
    },
    {
        display: '3'
    },
    {
        display: '+',
        operation: '+'
    },
    {
        display: '+/-',
        operation: '+/-'
    },
    {
        display: '0'
    },
    {
        display: '.'
    },
    {
        display: '=',
        operation: '='
    }]

const App: FC = () => {
    const [firstNumber, setFirstNumber] = useState<string>('0')
    const [secondNumber, setSecondNumber] = useState<string>('')
    const [currentOperation, setCurrentOperation] = useState<string>('')

    const handleNumber = (value: string) => {
        if (secondNumber.length === 0 && currentOperation.length === 0) {
            if (firstNumber === '0' && value !== '.' || firstNumber === 'Error' && value !== '.') {
                setFirstNumber(value)
            } else if ((firstNumber.includes('.') && value === '.') || firstNumber === 'Error') {
                return
            } else {
                setFirstNumber(prev => prev + value)
            }
        } else if (secondNumber.includes('.') && value === '.') {
            return
        } else {
            setSecondNumber(prev => prev + value)
        }
    }

    const handleOperation = (value: string) => {
        if (value === 'clear') {
            setCurrentOperation('')
            setFirstNumber('0')
            setSecondNumber('')
        } else if ((value === '+' || value === '-' || value === '/' || value === '**' || value === 'x') && firstNumber !== 'Error') {
            setCurrentOperation(value)
        } else if (value === '+/-' && currentOperation.length !== 0 && firstNumber !== 'Error') {
            setSecondNumber(String(+secondNumber * -1))
        } else if (value === '+/-' && currentOperation.length === 0 && firstNumber !== 'Error') {
            setFirstNumber(String(+firstNumber * -1))
        } else if (value === 'sqrt' && firstNumber !== 'Error') {
            if (+firstNumber < 0) {
                setFirstNumber('Error')
                setCurrentOperation('')
                setSecondNumber('')
            } else {
                setFirstNumber(math(firstNumber, 'sqrt'))
                setCurrentOperation('')
                setSecondNumber('')
            }
        } else if (value === '=' && currentOperation === '/' && secondNumber === '0') {
            setFirstNumber('Error')
            setCurrentOperation('')
            setSecondNumber('')
        } else if (value === '=' &&
            (currentOperation === '+' || currentOperation === '-' || currentOperation === '/' || currentOperation === '**' || currentOperation === 'x')) {
            setFirstNumber(math(firstNumber, currentOperation, secondNumber))
            setCurrentOperation('')
            setSecondNumber('')
        }
    }

    return (
        <div className="w-[100vw] h-[100vh] flex justify-center items-center">
            <div className="border border-black">
                <div className="relative h-[80px] bg-gray-300 text-[30px] p-4 justify-end flex items-center">
                    {firstNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + currentOperation + secondNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </div>
                <div className="grid grid-cols-4 grid-rows-auto p-1 gap-1 pt-4">
                    {items.map((item, i) => (
                        <div
                            key={i}
                            className='bg-gray-100 select-none flex justify-center items-center border border-black p-5 hover:bg-gray-300 text-lg'
                            onClick={() => !item.operation ? handleNumber(item.display) : handleOperation(item.operation)}>
                            {item.display}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default App;