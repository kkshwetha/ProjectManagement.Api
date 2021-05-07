using System.Runtime.Serialization;

namespace ProjectManagement.Entities.Enums
{
    public enum TaskStatus
    {
        [EnumMember(Value = "New")]
        New,
        InProgress,
        QA,
        Completed
    }
}
