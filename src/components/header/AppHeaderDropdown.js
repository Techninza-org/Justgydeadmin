import React, { useEffect, useState } from 'react'
import {
  CAvatar,
  CBadge,
  CButton,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import { cilLockLocked } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { useNavigate } from 'react-router-dom'

const AppHeaderDropdown = () => {
  const navigate = useNavigate() // Moved above useEffect
  // const [first_letter, setFirstLetter] = useState('')

  useEffect(() => {
    let loggedIn = false
    const user = localStorage.getItem('user')
    if (user) {
      loggedIn = true
      // const user_name = JSON.parse(user)?.name
      // setFirstLetter(user_name?.charAt(0).toUpperCase() || '')
    }
    if (!loggedIn) {
      navigate('/login')
    }
  }, [navigate])

  function handleLogout() {
    localStorage.clear()
    navigate('/login')
  }

  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0 pe-0" caret={false}>
        <CAvatar color="primary" textColor="white">
          {/* {first_letter} */}
        </CAvatar>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem onClick={handleLogout} style={{ cursor: 'pointer' }}>
          <CIcon icon={cilLockLocked} className="me-2" />
          Logout
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
