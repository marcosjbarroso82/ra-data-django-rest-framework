import React from 'react';
import {
    NumberInput, 
    TextInput, List, Datagrid, TextField, DateField, NumberField } from 'react-admin';

import { 
    TopToolbar,
    FilterButton,
    CreateButton,
    ExportButton,
    Button,
    FilterForm,
} from 'react-admin';
// import IconEvent from '@mui/icons-material/Event';
import { Stack } from '@mui/material';

const noteFilters = [
    <TextInput label="Search" source="q" alwaysOn />,
    <NumberInput label="Note" source="note"  />,
];



const ListToolbar = () => (
    <Stack direction="row" justifyContent="space-between">
        <FilterForm filters={noteFilters} />
    </Stack>
)

const ListActions = () => (
    <TopToolbar>
        <FilterButton filters={noteFilters} />
        <CreateButton />
        <ExportButton/>
        {/* Add your custom actions */}
        <Button
            onClick={() => { alert('Your custom action'); }}
            label="Show calendar"
        ></Button>
    </TopToolbar>
);


const NoteList = props => (
    <List {...props} 
        actions={<ListActions/>} 
        filters={<ListToolbar/>}
        >

        <Datagrid rowClick="edit">
            <TextField source="id" />
            <NumberField source="note" />
            <DateField source="created_at" />
            <NumberField source="post" />
            <NumberField source="author" />
        </Datagrid>
    </List>
);

export default NoteList;