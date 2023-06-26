import React from 'react';
import MySelect from "./UI/MyModal/MySelect";
import MyInput from "./UI/input/MyInput";

const PostFilter = ({filter,setFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({ ...filter, query : e.target.value})}
                placeholder={'Поиск...'}
            />
            <MySelect
                value={filter.sort}
                onChange={selectSort => setFilter({...filter, sort:selectSort})}
                defaultValue='Сортировка по'
                option={[
                    {value:"title", name:"По названию"},
                    {value:"body", name:"По описанию"}, ]}
            />
        </div>
    );
};

export default PostFilter;
