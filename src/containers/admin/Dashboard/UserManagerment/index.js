import React from 'react';
import Search from './listUser/search';
import ListUser from './listUser';

export default function UserManagerment() {
  return (
    <div>
      <h3>Thêm Người Dùng</h3>
      <Search />
      <ListUser />
    </div>
  )
}
