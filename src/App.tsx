import { ConfigProvider, Layout } from 'antd'
import { useState } from 'react'
import { TaskDataCollection } from './components/task-data-collection/task-data-collection'
import themeConfig from './styles/theme-config'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ConfigProvider theme={themeConfig}>
      <Layout style={{ minHeight: '100vh' }}>
        <Layout.Content>
          {/* <JobForm/> */}
          <TaskDataCollection></TaskDataCollection>
        </Layout.Content>
      </Layout>
    </ConfigProvider>
  )
}

export default App;
