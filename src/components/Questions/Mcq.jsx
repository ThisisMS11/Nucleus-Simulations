import React, { useState } from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import data from './questions.json'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

import { FormControl, RadioGroup, FormControlLabel, Radio, Button } from '@mui/material';

const Question = ({ q }) => {
    const [selectedValue, setSelectedValue] = useState('');
    const [showCorrectAns, setShowCorrectAns] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Selected value:', selectedValue);
    };


    return (
        <form onSubmit={handleSubmit}>
            <FormControl sx={{ width: 800, marginY: 4, backgroundColor: '#242424', color: 'white', padding: 2, borderRadius: 4 }}  >
                <Markdown remarkPlugins={[remarkGfm]}>{q.questiontext}</Markdown>

                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                    sx={{ marginTop: 1 }}
                    onChange={(e) => setSelectedValue(e.target.value)}
                >
                    {
                        q.options.map((option, index) => {
                            return <div key={index} className='h-fit  flex items-center justify-between border-2 border-[#6b7280] mt-2 p-1 rounded-md'>
                                <FormControlLabel value={option} control={<Radio />} label={option} sx={{ color: 'white', marginBottom: 1, width: '70%' }} />
                                {
                                    option === q.correctOption && <Chip label="Correct Answer" sx={{ backgroundColor: 'green', color: 'white', display: showCorrectAns ? 'flex' : 'none', alignItems: 'center' }} />
                                }
                            </div>
                        })
                    }
                </RadioGroup>

                <Accordion sx={{ backgroundColor: '#242424', color: 'white' }}>
                    <AccordionSummary
                        expandIcon={<ArrowDownwardIcon sx={{ color: 'white' }} />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        onClick={() => setShowCorrectAns(!showCorrectAns)}
                    >
                        <Typography>
                            Check Answer</Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                        <Typography>
                            {q.explanation}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </FormControl>
        </form>
    );
};

const Mcq = () => {
    return (
        <div className='border-2 border-green-500 '>
            <div id="q-header" className="bb">
                MCQ (single correct answer)
            </div>

            <div className='bb flex items-center justify-center flex-col'>
                {
                    data.map((e, index) => {
                        return (<div key={index}><Question q={e} /></div>)
                    })
                }
            </div>

        </div>
    )
}

export default Mcq
