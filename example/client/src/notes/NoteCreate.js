/* eslint react/jsx-key: off */
import React from 'react';
import {
    Create,
    SimpleForm,
    TextField,
    TextInput,
    IntInput,
    required,
} from 'react-admin';

const NoteCreate = props => (
    <Create {...props}>
        <SimpleForm redirect="list">
            <PostReferenceInput
                    source="post"
                    reference="posts"
                    allowEmpty
                    validate={required()}
                    perPage={10000}
                    sort={defaultSort}
                />


            <TextField source="id" />
            <TextInput source="name" validate={[required()]} />
        </SimpleForm>
    </Create>
);

export default NoteCreate;
