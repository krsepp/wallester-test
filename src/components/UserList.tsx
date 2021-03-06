import React, {useEffect, useState} from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import IUserListProps from '../interfaces/IUserListProps';
import {getListUsers} from '../services/reqres';
import IListUsers from '../interfaces/IListUsers';
import ReactPaginate from 'react-paginate';
import {Table} from 'react-bootstrap';

const UserList: React.FC<IUserListProps> = ({ page }) => {
    const [listUsers, setListUsers] = useState<IListUsers|null>(null);
    const history = useHistory();

    function displayUsers(): React.ReactElement[]|null {
        if (listUsers !== null) {
            let firstRowIndex = ((page - 1) * listUsers.per_page) + 1;

            return listUsers.data.map((user, index) => {
               return (
                   <tr key={user.id}>
                       <th scope='row'>{firstRowIndex + index}</th>
                       <td>{user.first_name}</td>
                       <td>{user.last_name}</td>
                       <td>
                           <NavLink to={`/user/${user.id}`} className='btn-link'>
                               Show
                           </NavLink>
                       </td>
                   </tr>
               );
            });
        }
        return null;
    }

    function handlePageClick(page: any): void {
        history.push(`/users/${page.selected + 1}`);
    }

    useEffect(() => {
        getListUsers(page).then(listUsers => setListUsers(listUsers));
    }, [page]);


    return listUsers !== null ? (
        <div className='user-list'>
            <Table responsive hover>
                <thead>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>First</th>
                        <th scope='col'>Last</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {displayUsers()}
                </tbody>
            </Table>

            <ReactPaginate
                pageCount={listUsers.total_pages}
                pageRangeDisplayed={3}
                marginPagesDisplayed={1}
                containerClassName='pagination justify-content-center mt-3'
                pageClassName='page-item'
                previousClassName='d-none'
                nextClassName='d-none'
                pageLinkClassName='page-link'
                previousLinkClassName='page-link'
                nextLinkClassName='page-link'
                activeClassName='active'
                initialPage={page-1}
                forcePage={page-1}
                disableInitialCallback={true}
                onPageChange={handlePageClick}
            />
        </div>
    ) : (
        <p>No users</p>
    );
};

export default UserList;