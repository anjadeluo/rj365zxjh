ClassModel =
    {
        create : function()
        {
            return function()
            {
                this.construct.apply(this, arguments);
            }
        }
    }
Extend = function(desc, src)
{
    for(var c in src)
    {
        desc[c] = src[c];
    }
    return desc;
}
Object.prototype.extend = function(src)
{
    return Extend.apply(this, [this, src]);
}