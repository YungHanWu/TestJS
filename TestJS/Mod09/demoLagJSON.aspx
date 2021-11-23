<%@ Page Language="C#" %>

<!DOCTYPE html>

<script runat="server">

    protected void Page_Load(object sender, EventArgs e)
    {
        System.Threading.Thread.Sleep(2000);
        Response.Clear();
        Response.ContentType = "application/json";
        Response.Write("{ \"name\": \"John\", \"age\": " + DateTime.Now.Millisecond+ " }");
        Response.End();
    }
</script>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
        </div>
    </form>
</body>
</html>
