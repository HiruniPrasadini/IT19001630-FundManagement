
package com;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;
import com.Fund;
/**
 * Servlet implementation class FundsAPI
 */
@WebServlet("/FundsAPI")
public class FundsAPI extends HttpServlet {
	private static final long serialVersionUID = 1L;

	Fund fundObj = new Fund();

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public FundsAPI() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String output = fundObj.insertFund(request.getParameter("fundName"), request.getParameter("fundResearch"),
				request.getParameter("fundType"), request.getParameter("fundAmount"),
				request.getParameter("fundDesc"), request.getParameter("fundDate"));
		
		response.getWriter().write(output);
	}

	
	protected void doPut(HttpServletRequest request, HttpServletResponse response)
			 throws ServletException, IOException
			{
		 Map paras = getParasMap(request);
		 String output = fundObj.updateFund(paras.get("hidFundIDSave").toString(),
		 paras.get("fundName").toString(),
		 paras.get("fundResearch").toString(),
		paras.get("fundType").toString(),
		paras.get("fundAmount").toString(),
		paras.get("fundDesc").toString(),
		paras.get("fundDate").toString());
		response.getWriter().write(output); 
			} 
	
	protected void doDelete(HttpServletRequest request, HttpServletResponse response)
			 throws ServletException, IOException
			{
			 Map paras = getParasMap(request);
			 String output = fundObj.deleteItem(paras.get("fundID").toString());
			response.getWriter().write(output);
			}
	
	// Convert request parameters to a Map
	private static Map getParasMap(HttpServletRequest request)
	{
	     Map<String, String> map = new HashMap<String, String>();
	     
	try
	 {
	     Scanner scanner = new Scanner(request.getInputStream(), "UTF-8");
	     String queryString = scanner.hasNext() ? scanner.useDelimiter("\\A").next() : "";
	     scanner.close();
	     
	    String[] params = queryString.split("&");
	 for (String param : params)
	 { 

	     String[] p = param.split("=");
	    map.put(p[0], p[1]);
	 }
	 }
	catch (Exception e)
	 {
	 }
	return map;
	 }


}
