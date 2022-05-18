import React, { useState } from 'react'
import { ProfileBarContainer, ProflieIcon, ProfileBar, Formbox } from '../styles/styledElements'
import { FaUserCircle, FaChevronCircleRight } from "react-icons/fa";
import { Form, Button } from 'react-bootstrap';
import { CgKeyhole, CgProfile, CgAdd } from 'react-icons/cg';

function Profilebar() {

    const [ShowProfileBar, setShowProfileBar] = useState(false);
    const [signinform, setsigninform] = useState(false);
    const [forgotpsw, setforgotpsw] = useState(false);
    const [signupform, setsignupform] = useState(false);
    console.log(signupform)

    return (
        <ProfileBarContainer>
            <ProflieIcon onClick={() => setShowProfileBar(!ShowProfileBar)} ShowProfileBar={ShowProfileBar}>
                <p>เข้าสู่ระบบ/สมัครสมาชิก</p>
                <div className="IconProfile">
                    <FaUserCircle />
                </div>
            </ProflieIcon>
            <ProfileBar ShowProfileBar={ShowProfileBar}>
                <Formbox signinform={signinform} forgotpsw={forgotpsw} signupform={signupform}>
                    <div className="IconForm">
                        <FaChevronCircleRight onClick={() => setShowProfileBar(!ShowProfileBar)} ShowProfileBar={ShowProfileBar} />
                    </div>
                    <div className="login-form">
                        <div className="IconProfile">
                            <CgProfile />
                        </div>
                        <h1 className='HeaderForm'>เข้าสู่ระบบ</h1>

                        <Form className='formbox'>
                            <Form.Group className="mb-3">
                                <Form.Control className='inputform' type="text" placeholder="ชื่อบัญชีผู้ใช้" />
                                <Form.Control className='inputform' type="password" placeholder="รหัสผ่าน" />
                                <div className='forgotpsw' onClick={() => { setsigninform(!signinform); setforgotpsw(!forgotpsw); }}>ลืมรหัสผ่านใช่ไหม</div>
                                <Button className='col-12 login' as="input" type="submit" value="เข้าสู่ระบบ" />
                            </Form.Group>
                            <hr />
                            <div className=' signup' onClick={() => { setsigninform(!signinform); setforgotpsw(forgotpsw); setsignupform(!signupform) }}>ยังไม่มีบัญชีผู้ใช้?สมัครสมาชิก</div>
                        </Form>
                    </div>
                    <div className="forgot-form">
                        <div className="IconProfile">
                            <CgKeyhole />
                        </div>
                        <h1 className='HeaderForm'>ลืมรหัสผ่าน</h1>

                        <Form className='formbox' >
                            <Form.Group className="mb-3">
                                <Form.Control className='inputform' type="text" placeholder="ชื่อบัญชีผู้ใช้" />
                                <Form.Control className='inputform' type="email" placeholder="อีเมล" />
                                <Button className='col-12 login' as="input" type="submit" value="ส่งอีเมลยืนยันรหัสผ่าน" />
                            </Form.Group>
                            <div className=' signup' onClick={() => { setsigninform(!signinform); setforgotpsw(!forgotpsw); }}>มีบัญชีอยู่แล้ว?เข้าสู่ระบบ</div>
                            <hr />
                            <div className=' signup' onClick={() => { setsigninform(signinform); setforgotpsw(!forgotpsw); setsignupform(!signupform) }}>ยังไม่มีบัญชีผู้ใช้?สมัครสมาชิก</div>
                        </Form>
                    </div>
                    <div className="signup-form">
                        <div className="IconProfile">
                            <CgAdd />
                        </div>
                        <h1 className='HeaderForm'>สมัครสมาชิก</h1>

                        <Form className='formbox' >
                            <Form.Group className="mb-3">
                                <Form.Label>ข้อมูลผู้ใช้</Form.Label>
                                <Form.Control className='inputform' type="text" placeholder="ชื่อบัญชีผู้ใช้" />
                                <div className="hstack gap-2">
                                    <Form.Control className='inputform ' type="text" placeholder="ชื่อ" />
                                    <Form.Control className='inputform ' type="text" placeholder="นามสกุล" />
                                </div>
                                <Form.Control className='inputform' type="password" placeholder="อีเมล" />
                                <Form.Control className='inputform' type="password" placeholder="เบอรโทรศัพท์" pattern="[0-9]{10}" />
                                <Form.Label>รหัสผ่าน</Form.Label>
                                <Form.Control className='inputform' type="password" placeholder="รหัสผ่าน" />
                                <Form.Control className='inputform' type="password" placeholder="ยืนยันรหัสผ่าน" />
                                <Button className='col-12 login' as="input" type="submit" value="สมัครสมาชิก" />
                            </Form.Group>
                            <hr />
                            <div className=' signup' onClick={() => { setsigninform(!signinform); setforgotpsw(forgotpsw); setsignupform(!signupform) }}>มีบัญชีอยู่แล้ว?เข้าสู่ระบบ</div>
                        </Form>
                    </div>
                </Formbox>
            </ProfileBar>
        </ProfileBarContainer>
    )
}

export default Profilebar