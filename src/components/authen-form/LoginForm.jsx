import { Button, Input, Form } from "antd";
import React from 'react'
import { FaHospital, FaTruck, FaBuilding, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaUser, FaLock } from "react-icons/fa"
function LoginForm() {
  const [form] = Form.useForm();

  const handleLogin = (values) => {
    console.log("Login values:", values);
  };

  return (
    <div className="min-h-[calc(95vh-120px)] bg-background flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="text-center mb-8">
          <img
            src="https://images.unsplash.com/photo-1615461066841-6116e61058f4"
            alt="Blood Donation Logo"
            className="h-16 w-16 mx-auto mb-4 object-contain"
          />
          <h1 className="text-2xl font-bold text-primary">Welcome to LifeStream</h1>
          <p className="text-accent mt-2">Sign in to continue saving lives</p>
        </div>

        <Form
          form={form}
          onFinish={handleLogin}
          layout="vertical"
          className="space-y-4"
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <div className="relative">
              <FaUser className="absolute left-3 top-3 text-accent" />
              <Input
                placeholder="Email"
                className="pl-10 py-2 w-full border border-input rounded-md"
              />
            </div>
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <div className="relative">
              <FaLock className="absolute left-3 top-3 text-accent" />
              <Input.Password
                placeholder="Password"
                className="pl-10 py-2 w-full border border-input rounded-md"
              />
            </div>
          </Form.Item>

          <div className="flex justify-between items-center mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-accent">Remember me</span>
            </label>
            <a href="#" className="text-primary hover:text-primary/80">
              Forgot password?
            </a>
          </div>

          <Button
            type="primary"
            htmlType="submit"
            className="w-full bg-primary hover:bg-primary/90 text-white py-2 rounded-md"
          >
            Sign In
          </Button>

          <div className="text-center mt-6">
            <p className="text-accent">
              Don't have an account?{" "}
              <a
                href="/register"
                className="text-primary hover:text-primary/80 font-medium"
              >
                Create Account
              </a>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default LoginForm