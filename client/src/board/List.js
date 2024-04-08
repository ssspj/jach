import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import "./List.css";

const Table = styled.table`
border-top: 2px solid tomato;
width: 100%;
`

const Tr = styled.tr`
height: 40px;
`
const Td = styled.td`
border-bottom: 1px solid #ddd;
`

const List = ({ list }) => {
    const natigate = useNavigate();
    return (
        <>
            <Table>
                <thead>
                    <Tr>
                        <Td>no</Td>
                        <Td>제목</Td>
                        <Td>글쓴이</Td>
                        <Td>날짜</Td>
                    </Tr>
                </thead>
                <tbody>
                    {
                        list.map((it, idx) => {
                            return (
                                <Tr key={it.id}>
                                    <Td>{idx + 1}</Td>
                                    <Td><Link to={`/view/${it.id}`}>{it.subject}</Link></Td>
                                    <Td>{it.name}</Td>
                                    <Td>{it.date}</Td>
                                </Tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            <hr />
            <div>
                <button onClick={() => natigate('/write')}>글작성</button>
            </div>
        </>
    )
}

export default List;