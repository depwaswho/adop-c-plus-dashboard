import React, { forwardRef, useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import MaterialTable from 'material-table';
import {
    AddBox, ArrowUpward, Check, ChevronLeft,
    ChevronRight, Clear, DeleteOutline, Edit,
    FilterList, FirstPage, LastPage, Remove,
    SaveAlt, Search, ViewColumn
} from '@material-ui/icons';
import axios from 'axios';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

function Users() {
    const [state, setState] = useState({
        columns: [],
        data: [],
    });

    useEffect((state) => {
        axios.get(process.env.REACT_APP_API_URL + '/ldap')
        .then(res => {
            let ldapGroups = []
            let tablecolumns = []
            let tableData = []
            tablecolumns.push({ title: 'Name', field: 'name', cellStyle:{ padding: '7px'} })
            res.data.forEach(item => {
                let user = { name: item.user }
                item.groups.forEach(group => {
                    if(!ldapGroups.includes(group)) {
                        ldapGroups.push(group)
                    }
                    user[group] = group.includes('admin') ? 1 : 0
                })
                tableData.push(user)
            })
            ldapGroups.forEach(item => {
                tablecolumns.push({ title: item, field: item, lookup: { 1: 'Admin', 0: 'Readonly' }, sorting: false })
            })
            setState({ ...state, columns: tablecolumns, data: tableData })
        });
    }, [])

    return (
        <Container>
            <br/>
            <MaterialTable
                icons={tableIcons}
                title="Users Matrix"
                columns={state.columns}
                data={state.data}
                editable={{
                    onRowAdd: newData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                        resolve();
                        const data = [...state.data];
                        data.push(newData);
                        setState({ ...state, data });
                        }, 600);
                    }),
                    onRowUpdate: (newData, oldData) =>
                    new Promise(resolve => {
                        setTimeout(() => {
                        resolve();
                        const data = [...state.data];
                        data[data.indexOf(oldData)] = newData;
                        setState({ ...state, data });
                        }, 600);
                    }),
                    onRowDelete: oldData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                        resolve();
                        const data = [...state.data];
                        data.splice(data.indexOf(oldData), 1);
                        console.log(oldData)
                        setState({ ...state, data });
                        }, 600);
                    }),
                }}
            />
        </Container>
    );
}

export default Users;
