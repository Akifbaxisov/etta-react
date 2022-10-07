import React from 'react'
import { Pagination } from 'react-bootstrap'
const PaginatedItems = () => {
  return (
    <>
    <Pagination style={{justifyContent: "center"}}>
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Item active>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Item>{4}</Pagination.Item>
      <Pagination.Item>{5}</Pagination.Item>
      <Pagination.Item>{10}</Pagination.Item>
      <Pagination.Item>{11}</Pagination.Item>
      <Pagination.Item>{12}</Pagination.Item>
      <Pagination.Item>{13}</Pagination.Item>
      <Pagination.Item>{20}</Pagination.Item>
      <Pagination.Next />
    </Pagination>
    </>
  )
}

export default PaginatedItems