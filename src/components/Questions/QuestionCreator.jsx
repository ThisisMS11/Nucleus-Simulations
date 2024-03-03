import React, { useState } from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

function renderOption({ index, option, handleRemoveOption }) {
    return (
        <ListItem
            secondaryAction={
                <IconButton
                    edge="end"
                    aria-label="delete"
                    title="Delete"
                    onClick={() => handleRemoveOption(option)}
                >
                    <CloseIcon sx={{ color: 'white' }} />
                </IconButton>
            }
            sx={{ width: 'fit-content', height: 35, marginX: 1, borderRadius: 6, color: 'white', backgroundColor: "black" }}
            key={index}
        >
            <ListItemText primary={option} />
        </ListItem>
    );
}


const QuestionCreator = () => {
    const [options, setOptions] = useState([]);
    const [optiontext, setOptiontext] = useState("");
    const [correctOption, setCorrectOption] = useState("");
    const [questiontext, setQuestiontext] = useState("");
    const [explanation, setExplanation] = useState("");

    const handleAddOption = () => {
        if (optiontext === "") return;
        const nextHiddenItem = options.includes(optiontext);
        if (!nextHiddenItem) {
            setOptions((prev) => [...prev, optiontext]);
            setOptiontext("");
        }
    };

    const handleRemoveOption = (item) => {
        setOptions((prev) => [...prev.filter((i) => i !== item)]);
    };

    const addOption = (
        <IconButton
            variant="filled"
            onClick={handleAddOption}
        >
            <AddIcon />
        </IconButton>
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log({questiontext});
        // console.log({options})
        // console.log({correctOption})
        // console.log({explanation})
    }

    return (

        <form className="h-full p-10 w-2/3  mt-4 mx-auto rounded-lg  border-gray-200 bg-white shadow-lg" onSubmit={handleSubmit}>
            <div className='flex items-center justify-center'>
                <textarea
                    className='block w-full rounded-md border border-gray-200 bg-white py-2.5 pl-5 pr-12 text-md shadow-lg font-medium focus:outline-none focus:ring-0 h-44 text-left'
                    placeholder='Enter Your Question Description Here'
                    value={questiontext}
                    onChange={(e) => { setQuestiontext(e.target.value) }}
                />

            </div>

            <List sx={{ mt: 1, display: 'flex' }}>
                {options.map((option, index) => (
                    renderOption({ index, option, handleRemoveOption })
                ))}
            </List>



            <div className='flex'>
                <input
                    type="text"
                    className='block w-1/3 rounded-md border border-gray-200 bg-white py-2.5 pl-5 pr-12 text-md shadow-lg font-medium focus:outline-none focus:ring-0 h-10 text-left'
                    placeholder='Add Another Option'
                    name="textContent"
                    value={optiontext}
                    onChange={(e) => setOptiontext(e.target.value)}
                />
                {addOption}
            </div>

            <TextField
                id="outlined-select-currency"
                select
                label="Correct Answer"
                sx={{ marginTop: 2 }}
                value={correctOption}
                onChange={(e) => { setCorrectOption(e.target.value) }}
            >
                {options.map((option) => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </TextField>



            <div className='mt-4 flex items-center justify-center'>
                <textarea
                    type="text"
                    className='block w-full rounded-md border border-gray-200 bg-white py-2.5 pl-5 pr-12 text-md shadow-lg font-medium focus:outline-none focus:ring-0 h-44 text-left'
                    placeholder='Explanation of answer'
                    value={explanation}
                    onChange={(e) => { setExplanation(e.target.value) }}
                />
            </div>

            <button type="submit" className='mx-auto text-white bg-black p-2 rounded-md mt-3'>
                Submit Question
            </button>
        </form>
    )
}

export default QuestionCreator