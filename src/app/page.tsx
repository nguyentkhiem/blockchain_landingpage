"use client";

import { Button, Col, Row, Typography } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import home from "./home.module.scss";
import Image from "next/image";

const { Title, Text } = Typography;

export default function Home() {
  return (
    <div className={home.container}>
      <Title level={1} className={home.title}>
        ROXY
      </Title>
      <Title level={3} className={home.description}>
        Powered by Solana
      </Title>
      <Row>
        <Col className={home.boxImage} xs={24} sm={12} md={12} lg={12} xl={12}>
          <Image
            className={home.imageCloud}
            src="/may.png"
            width={250}
            height={100}
            alt=""
          />
          <Text className={home.textCloud}>Powered by Solana</Text>
          <Image
            className={home.imageCat}
            src="/meo1.jpeg"
            width={150}
            height={250}
            alt=""
          />
        </Col>
        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
          <Row>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <Title level={3}>Powered by Solana Powered by Solana</Title>
            </Col>
          </Row>
          <Row>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <Button
                type="primary"
                shape="default"
                size="large"
                icon={<DownloadOutlined />}
                className={home.btnCha1}
              >
                Download DownloadDownload <DownloadOutlined />
              </Button>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              <Button
                type="primary"
                shape="default"
                size="large"
                icon={<DownloadOutlined />}
                className={home.btnCha2}
              >
                Download <DownloadOutlined />
              </Button>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              <Button
                type="primary"
                shape="default"
                size="large"
                icon={"X"}
                className={home.btnCha3}
              ></Button>
              <Button
                type="primary"
                shape="default"
                size="large"
                icon={"X"}
                className={home.btnCha3}
              ></Button>
              <Button
                type="primary"
                shape="default"
                size="large"
                icon={"X"}
                className={home.btnCha3}
              ></Button>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className={home.boxIntroduction}>
        <Col xs={24}>
          <div className={home.textRepeat}>ROXY</div>
        </Col>
        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
          <Image
            className={home.imageCat2}
            src="/meo1.jpeg"
            width={150}
            height={250}
            alt=""
          />
        </Col>
        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
          <Title level={4} className={home.textIntroduction}>
            There are five type of buttons in antd, namely they are: primary
            buttons, default buttons, dashed buttons, text buttons, and link
            buttons.
          </Title>
        </Col>
      </Row>

      <Row>
        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
          <div style={{ textAlign: "center" }}>Col</div>
        </Col>
        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
          <div style={{ textAlign: "center" }}>Col</div>
        </Col>
        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
          <div style={{ textAlign: "center" }}>Col</div>
        </Col>
        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
          <div style={{ textAlign: "center" }}>Col</div>
        </Col>
      </Row>
    </div>
  );
}
