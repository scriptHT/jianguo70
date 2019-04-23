import React, { Component } from 'react';
import "../index.css";
import { Card,Row,Col} from 'antd';
class Remember extends Component {
  render() {
    return (
        <div id="artical5" className="artical remember" style={{height:"800px" ,width:"100%"}}>
            <h1 id="reTitle">周年纪念</h1>
            <Row>
                <Col md={12} xs={24}>
                    <Card className="card2" title="强国之路，不凡中国" bordered={false} hoverable='true'
                        style={{textAlign:"center", }}>
                        <p>喜欢坐在摩天轮上倾听风儿的叮咛；喜欢乘着飞机享受翱翔于天空的喜悦；喜欢陪伴在机器人身旁感受不可思议的真实；喜欢在电视机前一览我大中国创下的无数奇迹！中国在时间的考验下，在建国七十年间，将一个个不可能变为了现实，让我们每个人都能感受到中国触手可及的变化。</p>
                        <p>记得邓稼先同志在临终前说出了这样一句话：不要和人家差得太远。这看似简单的几个字组合在一起，凝聚成了一股强大的力量，震撼着我们每个人的心灵！曾几何时，因为匈奴进逼长安，汉武帝不得不派使张骞出使西域，而正因为这次出使西域，为西汉开辟了一条文明的“丝绸之路”</p>
                        <p>一条条充满鲜血的漫漫长路，见证了中华民族几千年来不懈的斗争！我们不怕差距，因为我们懂得“解脱自身的局限”！</p>
                    </Card>
                </Col>
                <Col md={12} xs={0}>
                    <Card className="card3" title="改革开放，扶摇直上" bordered={false} hoverable='true'
                        style={{textAlign:"center", }}>
                        <p>有人说，古老悠久的东方生活着一群具有民族灵魂的人。芦苇青青，繁茂连绵。微风轻拂，空气中带着泥土的清香，夹杂着树叶与花朵的天然香气，每呼吸一口都是享受。雾气氤氲，透过薄薄的水雾，我看到同伴的嬉笑，和守护人的清澈透亮的双眸。</p>
                        <p>在近些年的唐山大地震，汶川大地震中，在突如其来的灾害面前，中国人民团结一心，众志成城，用不屈的精神、坚强的意志，克服了重重困难，发挥了民族精神，战胜了一个个天灾人祸。</p>
                        <p>“少年智则国智，少年富则国富，少年强则国强，少年独立则国独立……”我们青少年是祖国的希望，是民族的未来，希望的火种早已经埋在我们的心底。让我们举起中华魂的火炬，努力学习，挑起复兴中国的重担，尽心尽力报效祖国！为了祖国更加美好的明天，为了中华民族的灵魂，让我们携手共进吧！</p>
                    </Card>
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
