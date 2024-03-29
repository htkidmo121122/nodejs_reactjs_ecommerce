import React, { useState, useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
import { useNavigate } from 'react-router-dom';

const clientId = "158574255446-ju6egnqnfua7h7fpo8lqg9d6ekssqok6.apps.googleusercontent.com";

// Interface 
class AuthStrategy {
  handle(response) {} // Phương thức handle cho việc xử lý phản hồi từ đăng nhập
}

// Chiến lược cho xử lý thành công
class SuccessStrategy extends AuthStrategy {
  constructor(callback) {
    super();
    this.callback = callback; // Callback được truyền từ props để xử lý khi đăng nhập thành công
  }

  handle(response) {
    console.log("Đăng nhập thành công:", response.profileObj); // Log thông tin khi đăng nhập thành công
    const userEmail = response.profileObj.email; // Lấy email từ phản hồi
    localStorage.setItem('email', userEmail); // Lưu email vào localStorage
    this.callback(); // Gọi hàm xử lý thành công được truyền vào từ props
  }
}

// Chiến lược cho xử lý thất bại
class FailureStrategy extends AuthStrategy {
  constructor(callback) {
    super();
    this.callback = callback; // Callback được truyền từ props để xử lý khi đăng nhập thất bại
  }

  handle(error) {
    console.error("Đăng nhập thất bại:", error); // Log thông tin khi đăng nhập thất bại
    this.callback(); // Gọi hàm xử lý thất bại được truyền vào từ props
  }
}

function LoginbyGGComponent({ onSuccess, onFailure }) {
    const navigate = useNavigate(); // Sử dụng hook useNavigate để chuyển hướng đến một route mới
    const [email, setEmail] = useState(''); // Sử dụng hook useState để lưu trữ email

    useEffect(() => {
        const storedEmail = localStorage.getItem('email'); // Lấy email từ localStorage
        if (storedEmail) {
            setEmail(storedEmail); // Nếu có email được lưu trữ, đặt nó vào state
        }
    }, []); // useEffect này chỉ chạy một lần khi component được mount

    // Tạo các đối tượng chiến lược cho xử lý thành công và thất bại
    const successStrategy = new SuccessStrategy(() => navigate("/")); // Chuyển hướng đến route "/" khi đăng nhập thành công
    const failureStrategy = new FailureStrategy(() => {}); // Không có hành động cụ thể khi đăng nhập thất bại

    // Xử lý đăng nhập
    const handleAuth = (response, strategy) => {
      strategy.handle(response); // Gọi phương thức handle của chiến lược được chọn
      if (response.profileObj) {
        setEmail(response.profileObj.email); // Nếu có thông tin về profile, cập nhật email trong state
      }
    };

    return (
        <div id="signInButton">
            {/* Component GoogleLogin để xử lý việc đăng nhập bằng tài khoản Google */}
            <GoogleLogin
                clientId={clientId} // Client ID của ứng dụng
                buttonText="Đăng nhập bằng Google" // Văn bản hiển thị trên nút đăng nhập
                onSuccess={(response) => handleAuth(response, successStrategy)} // Xử lý khi đăng nhập thành công
                onFailure={(error) => handleAuth(error, failureStrategy)} // Xử lý khi đăng nhập thất bại
                cookiePolicy={'single_host_origin'} // Chỉ sử dụng cookie cho một host
                isSignIn={true} // Xác định rằng đây là một quá trình đăng nhập
            />
        </div>
    );
}

export default LoginbyGGComponent;
