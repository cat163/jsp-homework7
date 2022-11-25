package com.diary.tools;

import java.io.InputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.Properties;

public class ConnDB {
	public Connection conn = null; // 声明 Connection 对象的实例
	public Statement st = null; // 声明 Statement 对象的实例
	public ResultSet rs = null; // 声明 ResultSet 对象的实例
	private static String propFileName = "connDB.properties"; // 指定资源文件保存的位置
	private static Properties prop = new Properties(); // 创建并实例化Properties对象的实例
	private static String dbClassName = "com.mysql.jdbc.Driver"; // 定义保存数据库驱动的变量
	private static String dbUrl = "jdbc:mysql://localhost:3306/griddiary?user=root&useUnicode=true";

	public ConnDB() { // 构造方法
		try { // 捕捉异常
			// 将Properties文件读取到InputStream对象中
			InputStream in = getClass().getResourceAsStream(propFileName);
			prop.load(in); // 通过输入流对象加载Properties文件
			dbClassName = prop.getProperty("DB_CLASS_NAME", dbClassName); // 获取数据库驱动
			// 获取连接的URL
			dbUrl = prop.getProperty("DB_URL", dbUrl);
		} catch (Exception e) {
			e.printStackTrace(); // 输出异常信息
		}
	}

	/**
	 * 功能：获取连接的语句
	 * 
	 * @return 数据库链接对象 Connection conn
	 */
	public static Connection getConnection() {
		Connection conn = null;
		try { // 连接数据库时可能发生异常因此需要捕捉该异常
			Class.forName(dbClassName).newInstance(); // 装载数据库驱动
			conn = DriverManager.getConnection(dbUrl); // 建立与数据库URL中定义的数据库的连接
		} catch (Exception ee) {
			ee.printStackTrace(); // 输出异常信息
		}
		if (conn == null) {
			// 在控制台上输出提示信息
			System.err.println(
					"警告：DbConnectionManager.getConnection() 获得数据库链接失败。\r\n链接类型：" + dbClassName + "\r\n链接位置：" + dbUrl);
		}
		return conn;
	}

	/**
	 * 功能：执行查询，并返回查询结果
	 * 
	 * @param sql 查询的SQL语句
	 * @return 结果集对象 ResultSet rs
	 */
	public ResultSet executeQuery(String sql) {
		try { // 捕捉异常
			conn = getConnection(); // 调用getConnection()方法构造Connection对象的一个实例conn
			st = conn.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_READ_ONLY);
			rs = st.executeQuery(sql);
		} catch (Exception ex) {
			System.err.println(ex.getMessage()); // 输出异常信息
		}
		return rs; // 返回结果集对象
	}

	/**
	 * 功能：执行更新操作，返回执行成功数据的条数
	 * 
	 * @param sql 更新的SQL语句
	 * @return 执行成功数据的条数 int result
	 */
	public int executeUpdate(String sql) {
		int result = 0; // 定义保存返回值的变量
		try {
			conn = getConnection(); // 调用getConnection()方法构造Connection对象的一个实例conn
			st = conn.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY);
			result = st.executeUpdate(sql); // 执行更新操作
		} catch (Exception e) {
			result = 0; // 将保存返回值的变量赋值为0
		}
		return result; // 返回保存返回值的变量
	}

	/**
	 * 功能：关闭数据库的连接
	 */
	public void close() {
		try {
			if (rs != null) {
				rs.close();
			}
			if (st != null) {
				st.close();
			}
			if (conn != null) {
				conn.close();
			}
		} catch (Exception e) {
			e.printStackTrace(System.err); // 输出异常信息
		}
	}

}
