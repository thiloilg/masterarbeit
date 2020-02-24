export function ChartExample(
    data = {},
    onDataUpdate = () => {},
    settings = {},
    setSettings = () => {}
  ) {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
  
    const chart = new Chart(ctx, {
        tye: 'line',
        data,
    })
  
    onDataUpdate(updatedData => {
        chart.data = updatedData
        chart.update()
    })
  
    return canvas
}