<%@ Page Language="C#" %>

<!DOCTYPE html>

<script runat="server">

    protected void Page_Load(object sender, EventArgs e)
    {
        Response.Clear();
        Response.ContentType = "application/json";
        Response.Write("[{ \"name\": \"John\", \"age\": " + DateTime.Now.Millisecond+ " }, { \"name\": \"Mary\", \"age\": 35 }, { \"name\": \"Tony\", \"age\": 24 }]");
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
