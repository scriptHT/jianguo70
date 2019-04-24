import React, { Component } from 'react';
import "../index.css";
import { Card,Row,Col,Collapse,Timeline,Icon } from 'antd';

class Remember extends Component {
  render() {
    const Panel = Collapse.Panel;
    const text = `A dog is a type of domesticated animal.
                Known for its loyalty and faithfulness,
                it can be found as a welcome guest in many households across the world.`;
    return (
        <div id="artical5" className="artical remember" style={{height:"800px" ,width:"100%"}}>
            <h1 id="reTitle">周年纪念</h1>
            <Row>
                <Col md={24} xs={24}>
                <Collapse className="remCollapse" accordion defaultActiveKey={['1']}>
                    <Panel header="This is panel header 1" key="1">
                        <Card className="card3" title="改革开放，扶摇直上" bordered={false} hoverable='true'
                            style={{textAlign:"center", }}>
                            <p>{text}</p>
                            <p>{text}</p>
                            <p>{text}</p>
                        </Card>
                    </Panel>
                    <Panel header="This is panel header 2" key="2">
                        <Card className="card3" title="改革开放，扶摇直上" bordered={false} hoverable='true'
                            style={{textAlign:"center", }}>
                            <p>{text}</p>
                            <p>{text}</p>
                            <p>{text}</p>
                        </Card>
                    </Panel>
                    <Panel header="This is panel header 3" key="3">
                    <Timeline mode="alternate">
                        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                        <Timeline.Item color="green">Solve initial network problems 2015-09-01</Timeline.Item>
                        <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</Timeline.Item>
                        <Timeline.Item color="red">Network problems being solved 2015-09-01</Timeline.Item>
                        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                        <Timeline.Item color="red">Create a services site 2015-09-01</Timeline.Item>
                        <Timeline.Item dot={<Icon type="clock-circle-o"></Icon>}>Create a services site 2015-09-01</Timeline.Item>
                        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                        <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>Technical testing 2015-09-01</Timeline.Item>
                    </Timeline>
                    </Panel>
                </Collapse>,
                </Col>
                <Col md={12} xs={0}>
                    {/* <Card className="card3" title="改革开放，扶摇直上" bordered={false} hoverable='true'
                        style={{textAlign:"center", }}>
                        <p>有人说，古老悠久的东方生活着一群具有民族灵魂的人。芦苇青青，繁茂连绵。微风轻拂，空气中带着泥土的清香，夹杂着树叶与花朵的天然香气，每呼吸一口都是享受。雾气氤氲，透过薄薄的水雾，我看到同伴的嬉笑，和守护人的清澈透亮的双眸。</p>
                        <p>在近些年的唐山大地震，汶川大地震中，在突如其来的灾害面前，中国人民团结一心，众志成城，用不屈的精神、坚强的意志，克服了重重困难，发挥了民族精神，战胜了一个个天灾人祸。</p>
                        <p>“少年智则国智，少年富则国富，少年强则国强，少年独立则国独立……”我们青少年是祖国的希望，是民族的未来，希望的火种早已经埋在我们的心底。让我们举起中华魂的火炬，努力学习，挑起复兴中国的重担，尽心尽力报效祖国！为了祖国更加美好的明天，为了中华民族的灵魂，让我们携手共进吧！</p>
                    </Card> */}
                </Col>
            </Row>
            {/* <video
                className="bgvid"
                width="107%"
                height="100%"
                preload="true"
                autoPlay
                loop      
                muted={true}
                >
            <source 
                src="https://ygiyliul35425.oss-cn-hangzhou.aliyuncs.com/jianguo70/bgvid.mp4?OSSAccessKeyId=LTAIoNvWrHQquMM5&Expires=36201555298956&Signature=38FGaw%2BCMTwBVA2G2ecg6uwSLu8%3D"
                type="video/mp4" />
            </video> */}
        </div>
    );
  }
}

export default Remember;
