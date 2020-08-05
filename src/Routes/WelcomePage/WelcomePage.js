import React  from 'react';
import { Layout, Menu, Input , Table } from 'antd';
import { DeleteFilled } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import './index.scss';
import { FetchMoviesAction } from '../../Redux/actions/FetchMoviesAction'
const { Header, Footer, Content } = Layout;
const { Search } = Input;



function WelcomePage() {
    const movieListLoading = useSelector(state => state.fetchMoviesReducer.isLoading)
    const dispatch = useDispatch();
    const data  = useSelector(state => state.fetchMoviesReducer.movieList);
    const columns = [
        { title: 'Title', dataIndex: 'Title', key: 'Title', sorter: (a, b) => a.Title.length - b.Title.length },
        { title: 'Year', dataIndex: 'Year', key: 'Year', sorter: (a, b) => a.Year - b.Year  },
        { title: 'ImdbID', dataIndex: 'imdbID', key: 'imdbID',  sorter: (a, b) => a.imdbID.length - b.imdbID.length},
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: (text, record) => <a onClick={(e) => deleteItem(text , record)}><DeleteFilled /></a>
        }
    ];

    function searchMovies(values) {
        if(values) {
            dispatch(FetchMoviesAction.fetchMovies(values))
        }
    }
    function deleteItem(text , record){
        dispatch(FetchMoviesAction.fetchMovies(record.key , data))
    }

    return (
        <Layout className="layout">
            <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">Movies List</Menu.Item>
                </Menu>
            </Header>
            <Content>
                <div className="site-layout-content">
                    <Search
                        placeholder="Search Movies"
                        enterButton
                        onSearch={value => searchMovies(value)}
                        style={{ width: 500 }}
                    />
                  <div className="table-wrapper">
                    <Table
                        columns={columns}
                        dataSource={data}
                        bordered
                        loading={movieListLoading}
                    />
                 </div>

                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>React Test for Sellogo</Footer>
        </Layout>
    );
}
export { WelcomePage };
