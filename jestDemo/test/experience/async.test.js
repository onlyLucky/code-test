
/*
 * @Author: fg
 * @Date: 2022-07-12 10:25:12
 * @LastEditors: fg
 * @LastEditTime: 2022-07-12 13:31:36
 * @Description: Jest 测试异步代码
 */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// 回调方式

function fetchData (callback) {
  if (callback) {
    const data = 'peanut butter'
    callback(data)
  }
}
// Jest会等done回调函数执行结束后，结束测试
// 若 done() 函数从未被调用，测试用例会正如你预期的那样执行失败（显示超时错误）
//  若 expect 执行失败，它会抛出一个错误，后面的 done() 不再执行。 若我们想知道测试用例为何失败，我们必须将 expect 放入 try 中，将 error 传递给 catch 中的 done函数。 否则，最后控制台将显示一个超时错误失败，不能显示我们在 expect(data) 中接收的值。
test('the data is peanut butter', done => {
  function callback (data) {
    try {
      expect(data).toBe('peanut butter')
      done()
    } catch (error) {
      done(error)
    }
  }
  fetchData(callback)
})

// Promise 方式
function fetchDataPromise () {
  return new Promise((resolve) => {
    const data = 'Promise peanut butter'
    resolve(data)
  })
}
test('the data is peanut butter', () => {
  // 一定要返回promise
  return fetchDataPromise().then(data => {
    expect(data).toBe('Promise peanut butter')
  })
  // 或者expect 请求报错
  /*
  return fetchDataPromise().catch(e => {
    expect(e).toMatch('error')
  })
  */
})

// .resolvers / .rejects 匹配器

function fetchExpectMatch (flag) {
  return new Promise((resolve, reject) => {
    if (flag) {
      const data = 'peanut butter'
      resolve(data)
    } else {
      const error = 'error'
      reject(error)
    }
  })
}

test('.resolvers test', () => {
  return expect(fetchExpectMatch(true)).resolves.toBe('peanut butter')
})

test('.rejects  test', () => {
  return expect(fetchExpectMatch(false)).rejects.toMatch('error')
})

// Async / Await 方式
test('Async / Await resolve', async () => {
  const data = await fetchExpectMatch(true)
  expect(data).toBe('peanut butter')
})

test('Async / Await reject', async () => {
  expect.assertions(1)
  try {
    await fetchExpectMatch(false)
  } catch (error) {
    expect(error).toMatch('error')
  }
})

test('Async / Await resolves resolve', async () => {
  await expect(fetchExpectMatch(true)).resolves.toBe('peanut butter')
})

test('Async / Await rejects reject', async () => {
  await expect(fetchExpectMatch(false)).rejects.toMatch('error')
})
