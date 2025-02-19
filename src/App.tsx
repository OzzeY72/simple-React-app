import { Button, ConfigProvider, Layout } from 'antd'
import { useState } from 'react'
import themeConfig from './styles/theme-config'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ConfigProvider theme={themeConfig}>
      <Layout style={{ minHeight: '100vh' }}>
        <Layout.Content>
          <Button type='dashed' block>+ Add new task</Button>
        </Layout.Content>
      </Layout>
    </ConfigProvider>
  )
}

export default App;
