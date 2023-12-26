import notifySuccess from "../../items/noti_success";
import notifyInfor from '../../items/noti_infor';
import notifyError from '../../items/noti_error';
import Cookies from 'js-cookie';
import axios, { Axios } from "axios";
import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

export default function ProductSpec(props){
    return(
        <>
          <Table
            borderless
            hover
            responsive
          >
            <thead>
              <tr>
                <b> Thông số kỹ thuật </b>
              </tr>
            </thead>
            <tbody>
              {props && props.data && props.data.map(function(item,key){
                return(
                  <tr>
                    <th scope="row">
                      {item.thong_so.ten}
                    </th>
                    <td>
                    {item.gia_tri}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        </>
    )
}