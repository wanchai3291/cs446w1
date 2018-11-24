import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
    <div>
        <Link href="/">
          <a style={linkStyle}>หน้าแรก</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>รายชื่อ</a>
        </Link>
    </div>
)

export default Header