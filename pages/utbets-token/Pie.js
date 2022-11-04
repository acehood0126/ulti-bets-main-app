import React, { useRef, useLayoutEffect } from 'react'

const Pie = (props) => {
  let am4core = null
  let am4charts = null
  let am4themesAnimated = null
  if (typeof window !== 'undefined') {
    am4core = require('@amcharts/amcharts4/core')
    am4charts = require('@amcharts/amcharts4/charts')
    am4themesAnimated = require('@amcharts/amcharts4/themes/animated')
    am4core.useTheme(am4themesAnimated.default)
  }
  const chart = useRef(null)

  useLayoutEffect(() => {
    let pie = am4core.create('chartdiv', am4charts.PieChart3D)

    const pieData = props.data.map((item) => {
      return { name: item.country, quantity: item.litres }
    })
    // ...
    pie.data = pieData
    let pieSeries = pie.series.push(new am4charts.PieSeries3D())
    pieSeries.slices.template.strokeOpacity = 1
    pie.radius = am4core.percent(80)

    //change text color
    pieSeries.labels.template.fill = am4core.color('#fff')

    //change arrow color labels

    //labels arrow color white

    //change labels font
    pieSeries.labels.template.fontFamily = 'Nunito'

    // pieSeries.labels.template.fill = am4core.color('#fff')
    pieSeries.labels.template.fontSize = 20
    pieSeries.labels.template.fontWeight = 800

    // pieSeries.dataFields.value = 'quantity'
    // pieSeries.dataFields.category = 'name'
    // pieSeries.labels.template.disabled = true
    // pieSeries.ticks.template.disabled = true
    pieSeries.slices.template.tooltipText = '{category}: {value} $UTBETS'

    //change arrow color labels

    //labels arrow color white
    // pieSeries.labels.template.propertyFields.fill = 'color'

    // pieSeries.slices.template.propertyFields.fill = 'color'
    pieSeries.colors.list = [
      new am4core.color('#3D4D75'),
      new am4core.color('#A0C5C9'),
      new am4core.color('#E0CF77'),
      new am4core.color('#CB944B'),
      new am4core.color('#D06342'),
      new am4core.color('#794645'),
      new am4core.color('#79477C'),
    ]

    pieSeries.dataFields.value = 'quantity'
    pieSeries.dataFields.category = 'name'
    pieSeries.hiddenState.properties.opacity = 1
    pieSeries.hiddenState.properties.endAngle = -90
    pieSeries.hiddenState.properties.startAngle = -90
    pie.hiddenState.properties.radius = am4core.percent(60)
    pie.innerRadius = am4core.percent(40)
    chart.current = pie
    return () => {
      pie.dispose()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.data])
  return (
    <div
      style={{ width: '100%', height: '600px' }}
      id="chartdiv"
      className="pie"
    ></div>
  )
}

export default Pie
// import React, { useLayoutEffect } from 'react'

// import * as am5 from '@amcharts/amcharts5'
// import am5themes_Animated from '@amcharts/amcharts5/themes/Animated'

//chart type
// import * as am5percent from '@amcharts/amcharts5/percent'

// function Pie(props) {
//   let am5 = null
//   let am5themes_Animated = null
//   let am5percent = null
//   if (typeof window !== 'undefined') {
//     am5 = require('@amcharts/amcharts5')
//     am5themes_Animated = require('@amcharts/amcharts5/themes/Animated')
//     am5percent = require('@amcharts/amcharts5/percent')
//   }
//   //const chart = useRef(null);
//   const chartID = props.chartID
//   console.log({ chartID })

//   useLayoutEffect(() => {
//     //var root = am5.Root.new("chartdiv2");
//     var root = am5.Root.new(chartID)

//     // Set themes
//     // https://www.amcharts.com/docs/v5/concepts/themes/
//     root.setThemes([am5themes_Animated.new(root)])

//     // Create chart
//     // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
//     var chart = root.container.children.push(
//       am5percent.PieChart.new(root, {
//         endAngle: 270,
//       })
//     )

//     // Create series
//     // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
//     var series = chart.series.push(
//       am5percent.PieSeries.new(root, {
//         valueField: 'value',
//         categoryField: 'category',
//         endAngle: 270,
//       })
//     )

//     series.states.create('hidden', {
//       endAngle: -90,
//     })

//     //dataset
//     let data = [
//       {
//         category: 'Lithuania',
//         value: 501.9,
//       },
//       {
//         category: 'Czechia',
//         value: 301.9,
//       },
//       {
//         category: 'Ireland',
//         value: 201.1,
//       },
//       {
//         category: 'Germany',
//         value: 165.8,
//       },
//       {
//         category: 'Australia',
//         value: 139.9,
//       },
//       {
//         category: 'Austria',
//         value: 128.3,
//       },
//       {
//         category: 'UK',
//         value: 99,
//       },
//     ]

//     // Set data
//     // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
//     series.data.setAll(data)

//     series.appear(1000, 100)
//   }, [chartID])

//   return <div id={chartID}></div>
// }
// export default Pie
