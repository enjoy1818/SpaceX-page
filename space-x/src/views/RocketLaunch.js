import { Card, Col, Row, Select, Input } from 'antd';
import { FilterOutlined } from '@ant-design/icons';
import { Fragment, useEffect, useState, useMemo, useRef, useCallback } from 'react';
import "../RocketLaunch.css"
import {Link} from "react-router-dom";
import queryString from 'query-string'
import InfiniteScroll from 'react-infinite-scroll-component'

const initialState = {
    pagination: {
      perPage: 10,
      current: 1,
      hasMore: true,
    },
  }

const RocketLaunch = () => {
    const { Option } = Select;

    const [filterYear, setFilterYear] = useState("");
    const [filterRocketName, setFilterRocketName] = useState("");
    const [filterSuccess, setFilterSuccess] = useState("");
    const [pagination, setPagination] = useState(initialState.pagination)
    const [launchData, setLaunchData] = useState([]);
    const controllerRef = useRef()
    
    const handlePageChange = useCallback(
        () => {
          setPagination((prev) => ({ ...prev, current: prev.current + 1 }))
        },
        [],
    )

    const filterParams = useMemo(
        () => queryString.stringify({
          id: true,
          limit: pagination.perPage,
          offset: (pagination.current - 1) * pagination.perPage,
        }, { skipEmptyString: true }),
        [pagination],
      )

    useEffect(
        () => {
          const fetchLaunches = async () => {
            if (controllerRef.current) {
              controllerRef.current.abort()
            }
            const controller = new AbortController()
            controllerRef.current = controller
            try {
              const response = await fetch(`https://api.spacexdata.com/v3/launches?${filterParams}`, {
                signal: controllerRef.current?.signal,
              })
              if (response.status !== 200) {
                console.error(new Error(`API Error: status code ${response.status}`))
              } else {
                const json = await response.json()
                setLaunchData((prev) => ([...prev, ...json]))
                if (json.length < pagination.perPage) {
                  setPagination((prev) => ({ ...prev, hasMore: false }))
                }
              }
              controllerRef.current = null
            } catch (err) {
              console.error(err)
            }
          }
          fetchLaunches()
        },
        [filterParams, pagination.perPage],
      )

    function handleYear(event){
        setFilterYear(event.target.value);
    }

    function handleName(event){
        setFilterRocketName(event.value);
    }

    function handleSuccess(event){
        setFilterSuccess(event.value);
    }

    const labelStyle = {marginRight: '10px'};
    const inputStyle = {marginRight: '20px', width: 120, height: '32px'};
    
    return(
        <>


        <div align="right" style={{marginRight: '20px', marginBottom: '20px'}}>
                <label style={labelStyle}> <FilterOutlined/> Filtering By |</label>
                <label style={labelStyle}>Launch year:</label>
                    <Input type="text" onChange={handleYear} style={inputStyle}/>
                <label style={labelStyle}>Rocket's Name:</label>
                    <Select labelInValue style={inputStyle} onChange={handleName} labelInValue>
                            <Option value="">-</Option>
                            <Option value="Falcon 1">Falcon 1</Option>
                            <Option value="Falcon 9">Falcon 9</Option>
                            <Option value="Falcon Heavy">Falcon Heavy</Option>
                            <Option value="Starship">Starship</Option>
                    </Select>
                <label style={labelStyle}>Launch success ?</label>
                    <Select onChange={handleSuccess} style={inputStyle} labelInValue>
                            <Option value="all">-</Option>
                            <Option value="true">Success</Option>
                            <Option value="false">Failed</Option>
                    </Select>
        </div>
        <div id="scrollableDiv" style={{ height: 'calc(100vh - 200px)', overflowX: 'hidden', overflowY: 'auto' }}>

            <InfiniteScroll
                dataLength={launchData.length}
                next={handlePageChange}
                hasMore={pagination.hasMore}
                loader={<p style={{marginTop: '20px', display:'flex', justify:'center', alignItems:'center', flexDirection:'column'}}> Loading... </p>}
                scrollableTarget="scrollableDiv"
                style={{ overflow: 'hidden' }}
            >

            <Row style={{alignItems:"center"}}>
            {
            launchData.filter(launchData => launchData.launch_year.includes(filterYear)).filter(launchData => launchData.rocket.rocket_name.includes(filterRocketName)).filter(launchData => String(launchData.launch_success).includes(filterSuccess)).map((data) => (
            <Card key={data.id} title={data.mission_name} style={{width:"50%"}}>
                <Row style={{textAlign:"center"}}>
                    <Col span={6}>
                        <Card>
                        <div key={data.launch_year+data.id}>Launch Year<h2>{data.launch_year}</h2></div>
                        <div key={data.rocket.rocket_name+data.id}>Rocket Name<h3>{data.rocket.rocket_name}</h3></div>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card>
                            {data.rocket.first_stage.cores.map((coreData)=>(
                            <div key={coreData.id}>Engine Code <h3>{coreData.core_serial}</h3></div>
                            ))}
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card>
                        <div>Launch Status</div>
                        <div><h3>{data.launch_success ? "Success" : "Failed"}</h3></div>
                        </Card>
                        
                    </Col>
                    <Col span={6}>
                        <Card>
                        <Link to={"/Launches/"+data.flight_number}><div>Details</div></Link>
                        </Card>
                    </Col>
                </Row>       
            </Card>
        ))
            }
        </Row>

            </InfiniteScroll>
        </div>

        </>
    )
}
export default RocketLaunch