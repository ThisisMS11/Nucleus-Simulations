import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MailIcon from '@mui/icons-material/Mail';
import DeleteIcon from '@mui/icons-material/Delete';
import Label from '@mui/icons-material/Label';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import InfoIcon from '@mui/icons-material/Info';
import ForumIcon from '@mui/icons-material/Forum';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import Simulation from '../assets/temp/simulation.png'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import Diversity2Icon from '@mui/icons-material/Diversity2';

import { TreeView } from '@mui/x-tree-view/TreeView';
import { TreeItem, treeItemClasses } from '@mui/x-tree-view/TreeItem';

const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
    color: theme.palette.text.secondary,
    [`& .${treeItemClasses.content}`]: {
        color: theme.palette.text.secondary,
        borderTopRightRadius: theme.spacing(2),
        borderBottomRightRadius: theme.spacing(2),
        paddingRight: theme.spacing(1),
        fontWeight: theme.typography.fontWeightMedium,
        '&.Mui-expanded': {
            fontWeight: theme.typography.fontWeightRegular,
        },
        '&:hover': {
            backgroundColor: theme.palette.action.hover,
        },
        '&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused': {
            backgroundColor: `var(--tree-view-bg-color, ${theme.palette.action.selected})`,
            color: 'var(--tree-view-color)',
        },
        [`& .${treeItemClasses.label}`]: {
            fontWeight: 'inherit',
            color: 'inherit',
        },
    },
    [`& .${treeItemClasses.group}`]: {
        marginLeft: 0,
        [`& .${treeItemClasses.content}`]: {
            paddingLeft: theme.spacing(2),
        },
    },
}));

const StyledTreeItem = React.forwardRef(function StyledTreeItem(props, ref) {
    const theme = useTheme();
    const {
        bgColor,
        color,
        labelIcon: LabelIcon,
        labelText,
        colorForDarkMode,
        bgColorForDarkMode,
        ...other
    } = props;

    const styleProps = {
        '--tree-view-color': theme.palette.mode !== 'dark' ? color : colorForDarkMode,
        '--tree-view-bg-color':
            theme.palette.mode !== 'dark' ? bgColor : bgColorForDarkMode,
    };

    return (
        <StyledTreeItemRoot
            label={
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        p: 0.5,
                        pr: 0,
                    }}
                >
                    <Box component={LabelIcon} color="inherit" sx={{ mr: 1 }} />
                    <Typography variant="body2" sx={{ fontWeight: 'inherit', flexGrow: 1 }}>
                        {labelText}
                    </Typography>
                    <Typography variant="caption" color="inherit">
                    </Typography>
                </Box>
            }
            style={styleProps}
            {...other}
            ref={ref}
        />
    );
});

export default function SideBar() {
    return (
        <div className='bb'>

            <TreeView
                aria-label="gmail"
                defaultExpanded={['3']}
                defaultCollapseIcon={<ArrowDropDownIcon />}
                defaultExpandIcon={<ArrowRightIcon />}
                defaultEndIcon={<div style={{ width: 24 }} />}
                sx={{ height: 264, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
            >

                <StyledTreeItem nodeId="1" labelText="Introduction" labelIcon={AcUnitIcon}>

                    <StyledTreeItem
                        nodeId="2"
                        labelText="Content"
                        labelIcon={InfoIcon}
                        color="#1a73e8"
                        bgColor="#e8f0fe"
                        colorForDarkMode="#B8E7FB"
                        bgColorForDarkMode="#071318"
                    />
                    <StyledTreeItem
                        nodeId="3"
                        labelText="Simulations"
                        labelIcon={Diversity2Icon}
                        color="#e3742f"
                        bgColor="#fcefe3"
                        colorForDarkMode="#FFE2B7"
                        bgColorForDarkMode="#191207"
                    />
                    <StyledTreeItem
                        nodeId="4"
                        labelText="Questions and MCQs"
                        labelIcon={QuestionMarkIcon}
                        color="#a250f5"
                        bgColor="#f3e8fd"
                        colorForDarkMode="#D9B8FB"
                        bgColorForDarkMode="#100719"
                    />
                </StyledTreeItem>

                <StyledTreeItem nodeId="5" labelText="Discovery of Neutron" labelIcon={AcUnitIcon}>

                    <StyledTreeItem
                        nodeId="6"
                        labelText="Content"
                        labelIcon={InfoIcon}
                        color="#1a73e8"
                        bgColor="#e8f0fe"
                        colorForDarkMode="#B8E7FB"
                        bgColorForDarkMode="#071318"
                    />
                    <StyledTreeItem
                        nodeId="7"
                        labelText="Simulations"
                        labelIcon={Diversity2Icon}
                        color="#e3742f"
                        bgColor="#fcefe3"
                        colorForDarkMode="#FFE2B7"
                        bgColorForDarkMode="#191207"
                    />
                    <StyledTreeItem
                        nodeId="8"
                        labelText="Questions and MCQs"
                        labelIcon={QuestionMarkIcon}
                        color="#a250f5"
                        bgColor="#f3e8fd"
                        colorForDarkMode="#D9B8FB"
                        bgColorForDarkMode="#100719"
                    />
                </StyledTreeItem>

            </TreeView>
        </div>

    );
}
