import {useState} from "react";

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
        operation: '**'
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
        display: ',',
        operation: ','
    },
    {
        display: '=',
        operation: '='
    }]

const App = () => {
    const [calcNumber, setCalcNumber] = useState<string>('0')

    const handleNumber = (number: string) => {

    }

    return (
        <div className="w-[100vw] h-[100vh] flex justify-center items-center">
            <div className="border border-black">
                <div className="bg-gray-300 text-[30px] p-4 justify-end flex items-center">
                    {calcNumber}
                </div>
                <div className="grid grid-cols-4 grid-rows-auto p-1 gap-1 pt-4">
                    {items.map((item, i) => (
                        <div
                            key={i}
                            className='bg-gray-100 flex justify-center items-center border border-black p-5 hover:bg-gray-300 text-lg'
                            onClick={() => handleNumber(item.operation ? item.operation : item.display)}>
                            {item.display}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default App;