import { useGeneralContext } from '@/context/context';
import React from 'react';
import axios from 'axios'


interface Question {
    question: string;
    placeholder?: string;
    multipleChoices?: boolean;
    choices?: string[];
    isEmail?: boolean;
    isPhoneNumber?: boolean;
    required?:boolean,
    title:string
}

interface InputFormProps {
    title?: string;
    description?: string;
    questions: Question[];
}

const InputForm: React.FC<InputFormProps> = ({ title, description, questions }) => {
    const { applicationFormState, setApplicationFormState } = useGeneralContext()

    const handleChange = (title: string, value: string) => {
        setApplicationFormState((prevState: any) => ({
            ...prevState,
            [title]: value
        }));
    };

    
    

    // useEffect(() => {
    //     console.log(applicationFormState);
    // }, [applicationFormState]);

    return (
        <div className="text-white w-[80vw] lg:w-[50vw] md:max-w-[400px] p-6 rounded-lg ml-auto mr-auto 
        flex justify-center items-center  ">
            {title && <h3 className="text-3xl mb-4 sm:text-4xl md:text-5xl">{title}</h3>}
            {description && <p className="text-lg mb-6 w-[100%] text-left md:text-2xl sm:text-xl">{description}</p>}
            <ul className="pt-5 text-black text-center  
            w-screen mr-auto
            ">
                {questions.map((question, index) => (
                    <li key={index} className="mb-4 w-[80vw] md:max-w-[400px]  ">
                        <label className="block text-left mb-2 text-lg md:text-xl 
                      placeholder:text-sm">
                            {question.question}
                        </label>
                        {question.multipleChoices ? (
                            <div className="flex flex-wrap">
                                {question.choices?.map((choice, i) => (
                                    <div key={i} className="mr-4 mb-2">
                                        <label className="flex items-center">
                                            <input
                                                type="checkbox"
                                                className="mr-2"
                                                checked={applicationFormState[`${question.title}-${choice}`] === 'true'}
                                                onChange={(e) => handleChange(`${question.title}-${choice}`, e.target.checked ? 'true' : '')}
                                            />
                                            <span className="text-lg md:text-xl ">{choice}</span>
                                        </label>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <input
                                type="text"
                                placeholder={question.placeholder}
                                value={applicationFormState[question.title] || ''}
                                onChange={(e) => handleChange(question.title, e.target.value)}
                                className="w-full p-2 rounded max-w-[1500px] mr-auto ml-auto text-lg md:text-xl "
                            />
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default InputForm;