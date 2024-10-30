import { useState } from 'react';
import classNames from 'classnames';

export function Login() {
  const inputClass = ` p-4 outline-none block w-full rounded-full border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-java-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-java-600 sm:text-sm/6`;
  const [active, setActive] = useState('login');
  return (
    <div className="flex h-full flex-row items-center justify-evenly gap-8 bg-[#FFFEFC] px-10 py-9">
      <div className="h-full w-[40rem] rounded-[2.42rem] bg-[url('/image.png')] bg-cover bg-no-repeat bg-origin-border max-md:hidden">
        <div className="text-group_1 flex-col justify-between"></div>
      </div>
      <div className="flex h-2/3 w-[30rem] flex-col justify-evenly">
        <span className="self-center text-xl">欢迎来到学霸练习营!</span>
        <div
          className={classNames(
            'bg-java-400/60 before: before:bg-java-400 relative flex h-16 w-96 items-center justify-evenly self-center rounded-full px-4 py-3 before:absolute before:block before:h-12 before:w-1/2 before:rounded-full before:transition-all before:delay-150 before:ease-in-out',

            {
              'before:left-4': active === 'login',
              'before:left-44': active === 'register',
            },
          )}
        >
          <div
            className="relative inline-flex h-full w-1/2 items-center justify-center text-white"
            onClick={() => setActive('login')}
          >
            <span className="z-10">登录</span>
          </div>
          <span
            className="relative inline-flex h-full w-1/2 items-center justify-center text-white"
            onClick={() => setActive('register')}
          >
            <span className="z-10">注册</span>
          </span>
        </div>
        <span className="self-center text-gray-400">
          学霸练习营，每日好心情！
        </span>
        <span className={classNames({ hidden: active !== 'register' })}>
          Email&nbsp;Address
        </span>
        <div className={classNames({ hidden: active !== 'register' })}>
          <input
            name="email"
            placeholder="请输入邮箱地址"
            type="text"
            className={inputClass}
          />
        </div>
        <span className="">User&nbsp;name</span>
        <div className="">
          <input
            name="name"
            placeholder="请输入用户名"
            type="text"
            className={inputClass}
          />
        </div>
        <span className="">Password</span>
        <div className="">
          <input
            name="password"
            placeholder="请输入密码"
            type="password"
            className={inputClass}
          />
        </div>
        <div className="flex justify-between">
          <div className=" ">
            <input
              id="comments"
              name="comments"
              type="checkbox"
              className="text-java-600 focus:ring-java-600 h-4 w-4 rounded border-gray-300"
            />
            <span className="">记住我</span>
          </div>

          <span className="">忘记密码?</span>
        </div>
        <button className="bg-java-400 w-1/2 self-end rounded-full p-4 text-center text-white">
          <span className="">登录</span>
        </button>
      </div>
    </div>
  );
}

export default Login;
